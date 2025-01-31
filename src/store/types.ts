import { LoginState } from './login/types'
import { SystemState } from './main/system/types'

export interface RootState {
  username: string
}

interface ModulesSate {
  loginModule: LoginState
  systemModule: SystemState
}

export type StoreType = RootState & ModulesSate
