export const agentConfig = {
  agentName: 'SupportAgent',
  taskTypes: ['workflowAutomation', 'problemSolving', 'dataAnalysis'],
  parallelProcessing: false,
  learningEnabled: false,

  userInterface: {
    interfaceType: 'Web',
    logLevel: 'error',
  },

  workflowAutomation: {
    autoActions: [
      {
        trigger: 'dataLoad',
        action: 'optimizeData',
      },
    ],
    automationEnabled: true,
  },

  workflowAutomationStep1: {
    autoActions: [
      {
        trigger: 'dataUpdate',
        action: 'optimizeDatabase',
      },
    ],
    automationEnabled: true,
  },

  workflowAutomationStep2: {
    autoActions: [
      {
        trigger: 'dataUpgrade',
        action: 'upgradeDatabase',
      },
    ],
    automationEnabled: true,
  },

  errorHandling: {
    logErrors: true,
    retryOnFailure: 5,
  },
};
