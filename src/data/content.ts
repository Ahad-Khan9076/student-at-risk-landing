export const heroMetrics = [
  { label: '4 Key Lanes of Intervention', icon: 'lanes' },
  { label: '4 Specialized Routing Departments', icon: 'departments' },
  { label: 'Automated Daily Follow-Up Loops', icon: 'automation' },
] as const

export type LaneId = 'lane1' | 'lane2' | 'lane3' | 'lane4'

export const lanes = [
  {
    id: 'lane1' as const,
    number: 1,
    title: 'Detection & Triage',
    owner: 'CCD — Campus Control Department',
    accent: 'blue',
    summary:
      'Weekly attendance and turnstile data auto-flag cases on the MIS dashboard; CCD triages via first-aid contact or UIS referral.',
  },
  {
    id: 'lane2' as const,
    number: 2,
    title: 'Smart Routing',
    owner: 'UIS Portal — Reason-Based',
    accent: 'violet',
    summary:
      'Cases route to SDC, CSM, SFC, or Treasurer by root cause; misrouted cases return to CCD for re-routing.',
  },
  {
    id: 'lane3' as const,
    number: 3,
    title: 'Department Execution & Follow-Up',
    owner: 'All Specialized Departments',
    accent: 'cyan',
    summary:
      'Department workflows run with mandatory UIS follow-up dates and automated alerts until terminal status.',
  },
  {
    id: 'lane4' as const,
    number: 4,
    title: 'Terminal Outcomes',
    owner: 'System Statuses',
    accent: 'emerald',
    summary:
      'Every case resolves to Potential Joined, Freeze, Closed, or Dropout — each with defined retention meaning.',
  },
]

export const routingDepartments = [
  {
    code: 'SDC',
    name: 'Student Development Centre',
    criteria:
      'Not responding; 2–3 absences; flagged 2 continuous weeks AND turnstile shows campus presence (skipping class).',
    color: 'sky',
  },
  {
    code: 'CSM',
    name: 'Centre for Student Mentorship',
    criteria:
      'Personal, health, transport, or university-side assistance; OR repeatedly promised CCD attendance but failed to show.',
    color: 'indigo',
  },
  {
    code: 'SFC',
    name: 'Student Facilitation Centre',
    criteria: 'Program change request or semester freeze request.',
    color: 'purple',
  },
  {
    code: 'Treasurer',
    name: 'Office of Treasurer',
    criteria: 'Fee-related issues requiring plan, waiver, or clearance.',
    color: 'amber',
  },
]

export const departmentWorkflows = [
  {
    code: 'SDC',
    steps: [
      'Flag at turnstile → stop student at gate',
      'Meet student → identify root cause',
      'Coordinate across departments',
      'Update phone number via SOC application',
      'No entry: parent meeting; withdrawal intent: remark; attendance corrected: committee discussion',
    ],
  },
  {
    code: 'CSM',
    steps: [
      'Hold meeting → develop resolution strategy',
      'Consult stakeholders → set & share timeline',
      'Follow timeline to completion',
      'Rule: continues timeline if re-flagged (no duplicate cases)',
      'Rule: escalates to SDC if student misses scheduled meeting',
    ],
  },
  {
    code: 'SFC',
    steps: [
      'Receive request → process program change or semester freeze',
      'Record intended rejoin semester → confirm rejoin',
    ],
  },
  {
    code: 'Treasurer',
    steps: [
      'Receive fee issue → resolve (plan, waiver, clearance)',
      'Confirm student resumes attendance',
    ],
  },
]

export const terminalOutcomes = [
  {
    status: 'Potential Joined',
    color: 'emerald',
    description: 'Issue resolved; student resumed attending classes.',
  },
  {
    status: 'Freeze',
    color: 'amber',
    description:
      'Semester frozen with intent to rejoin next semester (triggers next-semester rejoin check).',
  },
  {
    status: 'Closed',
    color: 'slate',
    description: 'Student has left the university — valid, properly closed outcome.',
  },
  {
    status: 'Dropout',
    color: 'red',
    description:
      'Student has not registered for next semester after all follow-ups and strategies failed.',
  },
]

export const kpiTabs = [
  {
    id: 'ccd',
    label: 'CCD',
    fullName: 'Campus Control Department',
    metrics: [
      'Cases resolved at first contact without referral',
      'Correct categorization rate',
      'Support given to downstream departments',
      'Follow-up on referred cases verified as actually resolved',
    ],
  },
  {
    id: 'sdc',
    label: 'SDC',
    fullName: 'Student Development Centre',
    metrics: [
      'Student resumes attending',
      'Phone number corrected / reachable',
      'Consensus-based closure counted as valid',
    ],
  },
  {
    id: 'csm',
    label: 'CSM',
    fullName: 'Centre for Student Mentorship',
    metrics: [
      'Student rejoins / resumes',
      'Consensus-based closure counted as valid (never left open)',
    ],
  },
  {
    id: 'sfc',
    label: 'SFC',
    fullName: 'Student Facilitation Centre',
    metrics: ['Students who rejoin now or following semester'],
  },
  {
    id: 'treasurer',
    label: 'Treasurer',
    fullName: 'Office of Treasurer',
    metrics: ['Students who rejoin / resume after fee issue resolution'],
  },
]

export const glossary = [
  {
    term: 'Missing Student',
    definition: 'Joined current semester but absent in classes.',
  },
  {
    term: 'Potential In-Process',
    definition:
      'Issue being worked on; needs further assistance before re-joining.',
  },
  {
    term: 'Potential Joined',
    definition:
      'Issue resolved after being flagged absent; student resumed attendance.',
  },
  {
    term: 'Closed',
    definition: 'Student left the university.',
  },
  {
    term: 'Dropout',
    definition: 'Has not registered for the next semester.',
  },
  {
    term: 'Not Responding',
    definition:
      'Not answering calls (number switched off, busy, or unreachable).',
  },
]
