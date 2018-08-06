import * as React from 'react'
import WizardNavButtons from '../WizardNavButtons'
import StepForm from './StepForm'
import { IStepProps } from './StepInterfaces' 

export default class Step3 extends React.Component<IStepProps, any> {
    constructor(props: IStepProps) {
        super(props);
    }

    public isValid({ likesCheese }): boolean {        
        return !!likesCheese;
    }

    public render() {
        const isValid = this.isValid(this.props.data);

        return (
            <div className="step">
                <div className="row">
                    <div className="col-sm">
                        <StepForm onChange={this.props.onFieldChange}>
                            <p>Are you cool?</p>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="likesCheese" value="Yes" checked={this.props.data.likesCheese === 'Yes'}/>
                                <label className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="likesCheese" value="No" checked={this.props.data.likesCheese === 'No'}/>
                                <label className="form-check-label">No</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="likesCheese" value="Maybe" checked={this.props.data.likesCheese === 'Maybe'}/>
                                <label className="form-check-label">Maybe</label>
                            </div>
                        </StepForm>                    
                    </div>
                </div>
                <WizardNavButtons 
                    onNext={this.props.onNext} 
                    onPrevious={this.props.onPrevious} 
                    onFinish={this.props.onFinish} 
                    renderPrevious={true}
                    renderNext={true}
                    renderFinish={false}
                    disableNext={!isValid}
                />
            </div>
        )
    }
}