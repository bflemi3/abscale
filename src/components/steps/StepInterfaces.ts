export interface IStepProps {
    onFieldChange: (data: object) => void
    onFinish: () => void
    onNext: () => void
    onPrevious: () => void
    data: any
}

