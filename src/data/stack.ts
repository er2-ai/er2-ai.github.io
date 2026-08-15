/**
 * The Intelligence Stack.
 *
 * A map of intelligence from the most abstract questions toward its
 * mathematical, physical, computational, and architectural implementation.
 *
 * Section order is meaningful: it reads top to bottom as
 *   Philosophy → Mathematics → Physics → Computation → Digital Foundations →
 *   Hardware → Systems → Software → AI → Machine Learning → Neural Networks →
 *   Cognitive Architectures → General Intelligence
 */

export interface Topic {
  id: string;
  title: string;
}

export interface Section {
  id: string;
  numeral: string;
  title: string;
  topics: Topic[];
}

export const STACK: Section[] = [
  {
    id: 'philosophy',
    numeral: 'I',
    title: 'Philosophy',
    topics: [
      { id: 'what-is-intelligence', title: 'What Is Intelligence?' },
      { id: 'epistemology', title: 'Epistemology' },
      { id: 'philosophy-of-mind', title: 'Philosophy of Mind' },
      { id: 'consciousness', title: 'Consciousness' },
      { id: 'representation', title: 'Representation' },
      { id: 'reasoning', title: 'Reasoning' },
      { id: 'knowledge', title: 'Knowledge' },
      { id: 'agency', title: 'Agency' },
      { id: 'rationality', title: 'Rationality' },
    ],
  },
  {
    id: 'mathematics',
    numeral: 'II',
    title: 'Mathematics',
    topics: [
      { id: 'logic', title: 'Logic' },
      { id: 'set-theory', title: 'Set Theory' },
      { id: 'information-theory', title: 'Information Theory' },
      { id: 'probability', title: 'Probability' },
      { id: 'statistics', title: 'Statistics' },
      { id: 'linear-algebra', title: 'Linear Algebra' },
      { id: 'calculus', title: 'Calculus' },
      { id: 'optimization', title: 'Optimization' },
      { id: 'dynamical-systems', title: 'Dynamical Systems' },
      { id: 'computability', title: 'Computability' },
      { id: 'complexity-theory', title: 'Complexity Theory' },
    ],
  },
  {
    id: 'physics',
    numeral: 'III',
    title: 'Physics',
    topics: [
      { id: 'information-and-entropy', title: 'Information and Entropy' },
      { id: 'thermodynamics', title: 'Thermodynamics' },
      { id: 'energy', title: 'Energy' },
      { id: 'landauers-principle', title: "Landauer's Principle" },
      { id: 'physical-limits', title: 'Physical Limits of Computation' },
      { id: 'time-and-computation', title: 'Time and Computation' },
      { id: 'noise', title: 'Noise' },
      { id: 'quantum-information', title: 'Quantum Information' },
    ],
  },
  {
    id: 'computation',
    numeral: 'IV',
    title: 'Computation',
    topics: [
      { id: 'computability', title: 'Computability' },
      { id: 'algorithms', title: 'Algorithms' },
      { id: 'data-structures', title: 'Data Structures' },
      { id: 'computational-complexity', title: 'Computational Complexity' },
      { id: 'memory', title: 'Memory' },
      { id: 'parallelism', title: 'Parallelism' },
      { id: 'distributed-computation', title: 'Distributed Computation' },
    ],
  },
  {
    id: 'digital-foundations',
    numeral: 'V',
    title: 'Digital Foundations',
    topics: [
      { id: 'bits', title: 'Bits' },
      { id: 'binary', title: 'Binary' },
      { id: 'boolean-logic', title: 'Boolean Logic' },
      { id: 'logic-gates', title: 'Logic Gates' },
      { id: 'arithmetic', title: 'Arithmetic' },
      { id: 'encoding', title: 'Encoding' },
      { id: 'instruction-sets', title: 'Instruction Sets' },
    ],
  },
  {
    id: 'hardware',
    numeral: 'VI',
    title: 'Hardware',
    topics: [
      { id: 'transistors', title: 'Transistors' },
      { id: 'integrated-circuits', title: 'Integrated Circuits' },
      { id: 'cpus', title: 'CPUs' },
      { id: 'gpus', title: 'GPUs' },
      { id: 'accelerators', title: 'TPUs / Accelerators' },
      { id: 'memory-hierarchy', title: 'Memory Hierarchy' },
      { id: 'storage', title: 'Storage' },
      { id: 'interconnects', title: 'Interconnects' },
      { id: 'datacenters', title: 'Datacenters' },
      { id: 'power-and-cooling', title: 'Power and Cooling' },
    ],
  },
  {
    id: 'systems',
    numeral: 'VII',
    title: 'Computer Systems',
    topics: [
      { id: 'computer-architecture', title: 'Computer Architecture' },
      { id: 'operating-systems', title: 'Operating Systems' },
      { id: 'processes', title: 'Processes' },
      { id: 'threads', title: 'Threads' },
      { id: 'virtual-memory', title: 'Virtual Memory' },
      { id: 'filesystems', title: 'Filesystems' },
      { id: 'compilers', title: 'Compilers' },
      { id: 'networking', title: 'Networking' },
      { id: 'distributed-systems', title: 'Distributed Systems' },
    ],
  },
  {
    id: 'software',
    numeral: 'VIII',
    title: 'Software',
    topics: [
      { id: 'programming-languages', title: 'Programming Languages' },
      { id: 'algorithms', title: 'Algorithms' },
      { id: 'numerical-computing', title: 'Numerical Computing' },
      { id: 'scientific-computing', title: 'Scientific Computing' },
      { id: 'libraries', title: 'Libraries' },
      { id: 'frameworks', title: 'Frameworks' },
      { id: 'ml-systems', title: 'Systems for Machine Learning' },
    ],
  },
  {
    id: 'classical-ai',
    numeral: 'IX',
    title: 'Classical Artificial Intelligence',
    topics: [
      { id: 'search', title: 'Search' },
      { id: 'planning', title: 'Planning' },
      { id: 'constraint-solving', title: 'Constraint Solving' },
      { id: 'knowledge-representation', title: 'Knowledge Representation' },
      { id: 'expert-systems', title: 'Expert Systems' },
      { id: 'bayesian-methods', title: 'Bayesian Methods' },
      { id: 'reinforcement-learning', title: 'Reinforcement Learning' },
    ],
  },
  {
    id: 'machine-learning',
    numeral: 'X',
    title: 'Machine Learning',
    topics: [
      { id: 'statistical-learning', title: 'Statistical Learning' },
      { id: 'representation-learning', title: 'Representation Learning' },
      { id: 'supervised-learning', title: 'Supervised Learning' },
      { id: 'unsupervised-learning', title: 'Unsupervised Learning' },
      { id: 'self-supervised-learning', title: 'Self-Supervised Learning' },
      { id: 'reinforcement-learning', title: 'Reinforcement Learning' },
      { id: 'optimization', title: 'Optimization' },
      { id: 'generalization', title: 'Generalization' },
    ],
  },
  {
    id: 'neural-networks',
    numeral: 'XI',
    title: 'Neural Networks',
    topics: [
      { id: 'perceptrons', title: 'Perceptrons' },
      { id: 'multilayer-networks', title: 'Multilayer Networks' },
      { id: 'backpropagation', title: 'Backpropagation' },
      { id: 'convolutional-networks', title: 'Convolutional Networks' },
      { id: 'recurrent-networks', title: 'Recurrent Networks' },
      { id: 'attention', title: 'Attention' },
      { id: 'transformers', title: 'Transformers' },
      { id: 'state-space-models', title: 'State-Space Models' },
      { id: 'mixture-of-experts', title: 'Mixture of Experts' },
      { id: 'memory-architectures', title: 'Memory Architectures' },
      { id: 'emerging-architectures', title: 'Emerging Architectures' },
    ],
  },
  {
    id: 'scaling',
    numeral: 'XII',
    title: 'Scaling Intelligence',
    topics: [
      { id: 'data', title: 'Data' },
      { id: 'parameters', title: 'Parameters' },
      { id: 'compute', title: 'Compute' },
      { id: 'scaling-laws', title: 'Scaling Laws' },
      { id: 'training', title: 'Training' },
      { id: 'inference', title: 'Inference' },
      { id: 'distillation', title: 'Distillation' },
      { id: 'quantization', title: 'Quantization' },
      { id: 'distributed-training', title: 'Distributed Training' },
      { id: 'efficiency', title: 'Efficiency' },
      { id: 'energy-requirements', title: 'Energy Requirements' },
      { id: 'economics-of-compute', title: 'Economics of Compute' },
    ],
  },
  {
    id: 'cognitive-architectures',
    numeral: 'XIII',
    title: 'Cognitive Architectures',
    topics: [
      { id: 'memory', title: 'Memory' },
      { id: 'attention', title: 'Attention' },
      { id: 'reasoning', title: 'Reasoning' },
      { id: 'planning', title: 'Planning' },
      { id: 'world-models', title: 'World Models' },
      { id: 'tool-use', title: 'Tool Use' },
      { id: 'agents', title: 'Agents' },
      { id: 'multi-agent-systems', title: 'Multi-Agent Systems' },
      { id: 'learning', title: 'Learning' },
      { id: 'metacognition', title: 'Metacognition' },
    ],
  },
  {
    id: 'biological',
    numeral: 'XIV',
    title: 'Biological Intelligence',
    topics: [
      { id: 'neurons', title: 'Neurons' },
      { id: 'neural-circuits', title: 'Neural Circuits' },
      { id: 'brain-architecture', title: 'Brain Architecture' },
      { id: 'perception', title: 'Perception' },
      { id: 'memory', title: 'Memory' },
      { id: 'learning', title: 'Learning' },
      { id: 'evolution', title: 'Evolution' },
      { id: 'animal-intelligence', title: 'Animal Intelligence' },
      { id: 'human-intelligence', title: 'Human Intelligence' },
    ],
  },
  {
    id: 'measurement',
    numeral: 'XV',
    title: 'Intelligence Measurement',
    topics: [
      { id: 'psychometrics', title: 'Psychometrics' },
      { id: 'iq', title: 'IQ' },
      { id: 'cognitive-abilities', title: 'Cognitive Abilities' },
      { id: 'benchmarks', title: 'Benchmarks' },
      { id: 'ai-evaluation', title: 'AI Evaluation' },
      { id: 'generalization', title: 'Generalization' },
      { id: 'transfer', title: 'Transfer' },
      { id: 'reasoning-tests', title: 'Reasoning Tests' },
    ],
  },
  {
    id: 'general-intelligence',
    numeral: 'XVI',
    title: 'General Intelligence',
    topics: [
      { id: 'agi', title: 'Artificial General Intelligence' },
      { id: 'generalization', title: 'Generalization' },
      { id: 'autonomy', title: 'Autonomy' },
      { id: 'recursive-improvement', title: 'Recursive Improvement' },
      { id: 'collective-intelligence', title: 'Collective Intelligence' },
      { id: 'human-ai-systems', title: 'Human-AI Systems' },
      { id: 'superintelligence', title: 'Superintelligence' },
    ],
  },
  {
    id: 'open-questions',
    numeral: 'XVII',
    title: 'Open Questions',
    topics: [
      { id: 'unresolved', title: 'Unresolved Questions' },
      { id: 'hypotheses', title: 'Hypotheses' },
      { id: 'contradictions', title: 'Contradictions' },
      { id: 'research-directions', title: 'Research Directions' },
      { id: 'unplaced', title: 'Topics Not Yet Placed' },
    ],
  },
];

export const TOTAL_TOPICS = STACK.reduce((n, s) => n + s.topics.length, 0);

const sectionById = new Map(STACK.map((s) => [s.id, s]));

export function getSection(id: string): Section | undefined {
  return sectionById.get(id);
}

export function getTopic(sectionId: string, topicId: string): Topic | undefined {
  return getSection(sectionId)?.topics.find((t) => t.id === topicId);
}

export function topicKey(sectionId: string, topicId: string): string {
  return `${sectionId}/${topicId}`;
}
