export type BuildMode = 'production' | 'development'

export type BuildPaths = {
  entry: string,
  build: string,
  html: string,
  src: string
  favicon?: string,
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string,
  bundleSize?: boolean,
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean,
  port: number,
  bundleSize: boolean,
  apiUrl: string,
  project: 'frontend' | 'storybook' | 'jest'
}
