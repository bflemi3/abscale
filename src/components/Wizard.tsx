import * as React from 'react'
import ProgressBar from './ProgressBar'

interface IWizardState {
    currentStep: number
    data: any
    result: string
    isValid: boolean
    [key: string]: any
}

interface IWizardProps {
    steps: Array<typeof React.Component>
    onFinish: (result: string) => void
}

export default class Wizard extends React.Component<IWizardProps, IWizardState> {
    public state: IWizardState = {
        currentStep: 1,
        data: {},
        isValid: false,
        result: ''
    }

    constructor(props: IWizardProps) {
        super(props);

        this.finish = this.finish.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.previousStep = this.previousStep.bind(this);
    }

    public finish() {
        const { data } = this.state;
        if(data.isCool === 'Yes') return this.props.onFinish(`You're cool!!`);
        if(data.doesSmellGood !== 'Yes') return this.props.onFinish(`You smell bad!!`);
        this.props.onFinish(`You're boring!!`);
    }

    public onFieldChange(data: object) {
        this.setState({ data: { ...this.state.data, ...data } });
    }

    public nextStep() {
        this.setState({
            currentStep: this.state.currentStep + 1
        })
    }

    public previousStep() {
        this.setState({
            currentStep: this.state.currentStep - 1
        })
    }

    public render() {
        const { currentStep, data } = this.state;
        const { steps } = this.props;

        const CurrentStepComponent = steps[currentStep - 1];
       
        return (
            <div className="wizard">
                <div className="row">
                    <div className="col-sm">
                        <ProgressBar completed={(currentStep - 1) / steps.length}/>
                    </div>
                </div>
                <CurrentStepComponent data={data} onFieldChange={this.onFieldChange} onFinish={this.finish} onNext={this.nextStep} onPrevious={this.previousStep}/>
            </div>
        )
    }
}