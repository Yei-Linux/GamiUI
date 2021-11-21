export interface IStepsInitialState {
  currentStep: number | null
}

export interface IStepsContext extends IStepsInitialState {
  setCurrentStep: (data: number) => void
}
