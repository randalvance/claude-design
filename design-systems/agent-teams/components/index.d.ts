import * as React from 'react';

export type StepKind = 'bash' | 'read' | 'edit' | 'ask' | 'subagent' | 'think' | 'said';
export type IconName = 'spark' | 'terminal' | 'file' | 'pencil' | 'help' | 'users' | 'brain' | 'message' | 'check' | 'x' | 'loader' | 'chevron' | 'bot' | 'zap' | 'compass' | 'shield' | 'search' | 'wrench' | 'plug' | 'send' | 'plus';

export interface IconProps { name: IconName; size?: number; strokeWidth?: number; className?: string }
export declare function Icon(props: IconProps): JSX.Element;

export interface ButtonProps { variant?: 'primary' | 'ghost' | 'danger'; size?: 'sm' | 'md'; icon?: IconName; glow?: boolean; disabled?: boolean; onClick?: () => void; children?: React.ReactNode }
export declare function Button(props: ButtonProps): JSX.Element;

export interface ChipProps { tone?: 'neutral' | 'ok' | 'warn' | 'err' | 'accent'; kind?: StepKind; mono?: boolean; children?: React.ReactNode }
export declare function Chip(props: ChipProps): JSX.Element;

export interface StatusDotProps { kind?: StepKind; error?: boolean; running?: boolean; idle?: boolean; pop?: boolean; delay?: string; label?: string }
export declare function StatusDot(props: StatusDotProps): JSX.Element;

export interface AgentAvatarProps { id?: string; name?: string; glyph?: IconName; hue?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8; color?: string; size?: number; filled?: boolean; status?: 'live' | 'done' | 'error' | 'ask' }
export declare function AgentAvatar(props: AgentAvatarProps): JSX.Element;
export declare namespace AgentAvatar { function Stack(props: { agents: AgentAvatarProps[]; size?: number }): JSX.Element }

export interface ToggleProps { checked?: boolean; defaultChecked?: boolean; onChange?: (on: boolean) => void; label?: string; help?: string; tone?: 'accent' | 'danger'; disabled?: boolean }
export declare function Toggle(props: ToggleProps): JSX.Element;

export interface RadialMeterProps { value: number; size?: number; label?: string; format?: (v: number) => string }
export declare function RadialMeter(props: RadialMeterProps): JSX.Element;

export interface GlowCardProps { state?: 'open' | 'live' | 'busy' | 'done' | 'attention' | 'danger' | 'selected' | 'max'; onClick?: () => void; style?: React.CSSProperties; children?: React.ReactNode }
export declare function GlowCard(props: GlowCardProps): JSX.Element;

export interface SessionCardProps { title: string; agent?: string; agentId?: string; glyph?: IconName; meta?: string; time?: string; state?: 'busy' | 'idle' | 'attention' | 'done' | 'failed'; selected?: boolean; onClick?: () => void }
export declare function SessionCard(props: SessionCardProps): JSX.Element;

export interface TurnStep { kind: StepKind; label?: string; detail?: string; time?: string; status?: 'ok' | 'running' | 'error' }
export interface TurnCapsuleProps { steps: TurnStep[]; agent?: string; agentId?: string; glyph?: IconName; live?: boolean; failed?: boolean; elapsed?: string; title?: string; sub?: string; now?: string; open?: boolean; defaultOpen?: boolean; onToggle?: (open: boolean) => void }
export declare function TurnCapsule(props: TurnCapsuleProps): JSX.Element;

export interface EffortSliderProps { value?: number; defaultValue?: number; levels?: string[]; onChange?: (index: number, level: string) => void }
export declare function EffortSlider(props: EffortSliderProps): JSX.Element;

export interface ComposerProps { agent?: string; model?: string; effort?: number; context?: number; yolo?: boolean; sending?: boolean; placeholder?: string }
export declare function Composer(props: ComposerProps): JSX.Element;

export interface ThinkingIndicatorProps { messages?: string[]; interval?: number }
export declare function ThinkingIndicator(props: ThinkingIndicatorProps): JSX.Element;

export interface BubbleProps { author?: 'user' | 'agent'; children?: React.ReactNode }
export declare function Bubble(props: BubbleProps): JSX.Element;

export interface AgentNodeProps { name: string; id?: string; glyph?: IconName; hue?: number; color?: string; state?: 'live' | 'selected' | 'failed' }
export declare function AgentNode(props: AgentNodeProps): JSX.Element;

export declare function hueIndex(id: string): number;
export declare const EFFORT: string[];
