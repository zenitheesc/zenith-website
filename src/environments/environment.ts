const launchesApiUrl = 'https://zenitheesc.github.io/launches-data' as const;

const launchesEndpoints = {
  launches: {
    all: `${launchesApiUrl}/index.json`,
    contentLaunch: `${launchesApiUrl}/contents`
  }
} as const;

export const environment = {
  launchesApiUrl,
  launchesEndpoints
};
