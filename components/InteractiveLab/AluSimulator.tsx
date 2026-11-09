'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Binary, Code2, Check, ArrowRight } from 'lucide-react'

type AluOp = 'ADD' | 'SUB' | 'AND' | 'OR' | 'XOR' | 'LSL' | 'LSR' | 'CMP'

interface OpDetail {
  name: string
  code: string
  verilog: string
  description: string
}

const operations: Record<AluOp, OpDetail> = {
  ADD: {
    name: '16-Bit Arithmetic Addition',
    code: "4'b0000",
    verilog: `4'b0000: begin\n  {Carry, ALU_Out} = A + B;\n  Zero = (ALU_Out == 16'h0000);\nend`,
    description: 'Computes sum of operands A and B with full 16-bit Carry overflow capture.',
  },
  SUB: {
    name: '16-Bit Arithmetic Subtraction',
    code: "4'b0001",
    verilog: `4'b0001: begin\n  ALU_Out = A - B;\n  Carry   = (A < B);\n  Zero    = (ALU_Out == 16'h0000);\nend`,
    description: 'Subtracts operand B from A; sets borrow carry bit if underflow occurs.',
  },
  AND: {
    name: 'Bitwise Logical AND',
    code: "4'b0010",
    verilog: `4'b0010: begin\n  ALU_Out = A & B;\n  Carry   = 1'b0;\n  Zero    = (ALU_Out == 16'h0000);\nend`,
    description: 'Bitwise masking operation across all 16 parallel bit lines.',
  },
  OR: {
    name: 'Bitwise Logical OR',
    code: "4'b0011",
    verilog: `4'b0011: begin\n  ALU_Out = A | B;\n  Carry   = 1'b0;\n  Zero    = (ALU_Out == 16'h0000);\nend`,
    description: 'Bitwise set operation merging high logic lines.',
  },
  XOR: {
    name: 'Bitwise Logical XOR',
    code: "4'b0100",
    verilog: `4'b0100: begin\n  ALU_Out = A ^ B;\n  Carry   = 1'b0;\n  Zero    = (ALU_Out == 16'h0000);\nend`,
    description: 'Exclusive OR used in parity checks and half-adder primitives.',
  },
  LSL: {
    name: 'Logical Shift Left (1-bit)',
    code: "4'b0101",
    verilog: `4'b0101: begin\n  Carry   = A[15];\n  ALU_Out = A << 1;\n  Zero    = (ALU_Out == 16'h0000);\nend`,
    description: 'Multiplies operand A by 2; shifts MSB into Carry flag.',
  },
  LSR: {
    name: 'Logical Shift Right (1-bit)',
    code: "4'b0110",
    verilog: `4'b0110: begin\n  Carry   = A[0];\n  ALU_Out = A >> 1;\n  Zero    = (ALU_Out == 16'h0000);\nend`,
    description: 'Divides operand A by 2; shifts LSB into Carry flag.',
  },
  CMP: {
    name: 'Comparison (A == B)',
    code: "4'b0111",
    verilog: `4'b0111: begin\n  ALU_Out = (A == B) ? 16'h0001 : 16'h0000;\n  Zero    = (A != B);\n  Carry   = (A > B);\nend`,
    description: 'Equality comparison outputting 16-bit boolean flag.',
  },
}

export default function AluSimulator() {
  const [selectedOp, setSelectedOp] = useState<AluOp>('ADD')
  const [operandA, setOperandA] = useState<number>(0x002f)
  const [operandB, setOperandB] = useState<number>(0x0014)

  // Compute ALU Result
  const computeAlu = () => {
    const a = operandA & 0xffff
    const b = operandB & 0xffff
    let result = 0
    let carry = false

    switch (selectedOp) {
      case 'ADD': {
        const full = a + b
        result = full & 0xffff
        carry = full > 0xffff
        break
      }
      case 'SUB': {
        result = (a - b) & 0xffff
        carry = a < b
        break
      }
      case 'AND': {
        result = (a & b) & 0xffff
        carry = false
        break
      }
      case 'OR': {
        result = (a | b) & 0xffff
        carry = false
        break
      }
      case 'XOR': {
        result = (a ^ b) & 0xffff
        carry = false
        break
      }
      case 'LSL': {
        carry = (a & 0x8000) !== 0
        result = (a << 1) & 0xffff
        break
      }
      case 'LSR': {
        carry = (a & 0x0001) !== 0
        result = (a >> 1) & 0xffff
        break
      }
      case 'CMP': {
        result = a === b ? 1 : 0
        carry = a > b
        break
      }
    }

    const zero = result === 0
    const negative = (result & 0x8000) !== 0

    return {
      result,
      carry,
      zero,
      negative,
    }
  }

  const { result, carry, zero, negative } = computeAlu()
  const currentOp = operations[selectedOp]

  return (
    <div className="space-y-6">
      {/* Operation Selection Matrix */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(operations) as AluOp[]).map((op) => (
          <button
            key={op}
            onClick={() => setSelectedOp(op)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedOp === op
                ? 'bg-secondary text-slate-950 shadow-amber-glow'
                : 'bg-surface-light border border-glass-border text-slate-400 hover:text-white'
            }`}
          >
            {op}
          </button>
        ))}
      </div>

      {/* Main ALU Interactive Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Input Operands (6 cols) */}
        <div className="lg:col-span-6 modern-card p-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Input Bus (16-Bit RTL)</span>
            <span className="text-secondary font-bold">OPCODE: {currentOp.code}</span>
          </div>

          {/* Operand A */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Operand A:</span>
              <span className="text-primary font-bold">
                0x{operandA.toString(16).toUpperCase().padStart(4, '0')} ({operandA})
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={operandA}
              onChange={(e) => setOperandA(Number(e.target.value))}
              className="w-full accent-primary h-1.5 bg-surface-light rounded-lg cursor-pointer"
            />
            <div className="text-[10px] font-mono text-slate-500 truncate">
              BIN: {operandA.toString(2).padStart(16, '0')}
            </div>
          </div>

          {/* Operand B */}
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Operand B:</span>
              <span className="text-secondary font-bold">
                0x{operandB.toString(16).toUpperCase().padStart(4, '0')} ({operandB})
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="255"
              value={operandB}
              onChange={(e) => setOperandB(Number(e.target.value))}
              className="w-full accent-amber-500 h-1.5 bg-surface-light rounded-lg cursor-pointer"
            />
            <div className="text-[10px] font-mono text-slate-500 truncate">
              BIN: {operandB.toString(2).padStart(16, '0')}
            </div>
          </div>

          {/* Operation Summary */}
          <div className="pt-2 border-t border-glass-border text-xs font-mono text-slate-400">
            <span className="text-white font-semibold">{currentOp.name}</span>
            <p className="text-[11px] text-slate-500 mt-0.5">{currentOp.description}</p>
          </div>
        </div>

        {/* Right: Output Registers & Hardware Status Flags (6 cols) */}
        <div className="lg:col-span-6 modern-card p-5 space-y-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              ALU Output Registers
            </div>

            {/* Output Display */}
            <div className="p-4 rounded-xl bg-surface-lowest border border-glass-border space-y-1">
              <div className="text-xs font-mono text-slate-500">ALU_OUT [15:0]</div>
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-accent">
                0x{result.toString(16).toUpperCase().padStart(4, '0')}
              </div>
              <div className="text-xs font-mono text-slate-400">
                Decimal: {result} &bull; BIN: {result.toString(2).padStart(16, '0')}
              </div>
            </div>
          </div>

          {/* Status Flag LEDs */}
          <div className="pt-3 border-t border-glass-border">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              RTL Status Flags
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div
                className={`p-2 rounded-lg border transition-all ${
                  zero
                    ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                    : 'bg-surface-light border-glass-border text-slate-600'
                }`}
              >
                <div className="font-bold">ZERO (Z)</div>
                <div className="text-[10px]">{zero ? 'HIGH (1)' : 'LOW (0)'}</div>
              </div>

              <div
                className={`p-2 rounded-lg border transition-all ${
                  carry
                    ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                    : 'bg-surface-light border-glass-border text-slate-600'
                }`}
              >
                <div className="font-bold">CARRY (C)</div>
                <div className="text-[10px]">{carry ? 'HIGH (1)' : 'LOW (0)'}</div>
              </div>

              <div
                className={`p-2 rounded-lg border transition-all ${
                  negative
                    ? 'bg-red-500/20 border-red-500/50 text-red-400'
                    : 'bg-surface-light border-glass-border text-slate-600'
                }`}
              >
                <div className="font-bold">SIGN (N)</div>
                <div className="text-[10px]">{negative ? 'HIGH (1)' : 'LOW (0)'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verilog HDL RTL Snippet Preview */}
      <div className="p-4 rounded-xl bg-surface-lowest border border-glass-border space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Code2 size={14} className="text-primary" />
            <span>Vivado 2025.2 Synthesized RTL Case Clause:</span>
          </span>
          <span className="text-accent text-[11px]">TIMING VERIFIED</span>
        </div>
        <pre className="text-xs font-mono text-slate-300 bg-black/40 p-3 rounded-lg overflow-x-auto leading-relaxed">
          <code>{currentOp.verilog}</code>
        </pre>
      </div>
    </div>
  )
}

