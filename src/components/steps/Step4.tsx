import * as React from 'react'
import WizardNavButtons from '../WizardNavButtons'
import StepForm from './StepForm'
import { IStepProps } from './StepInterfaces' 

export default class Step4 extends React.Component<IStepProps, any> {
    constructor(props: IStepProps) {
        super(props);
    }

    public isValid({ likesHotDogs }): boolean {        
        return !!likesHotDogs;
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
                                <input className="form-check-input" type="radio" name="likesHotDogs" value="Yes" checked={this.props.data.likesHotDogs === 'Yes'}/>
                                <label className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="likesHotDogs" value="No" checked={this.props.data.likesHotDogs === 'No'}/>
                                <label className="form-check-label">No</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="likesHotDogs" value="Maybe" checked={this.props.data.likesHotDogs === 'Maybe'}/>
                                <label className="form-check-label">Maybe</label>
                            </div>
                        </StepForm>                    
                    </div>
                </div>
                <WizardNavButtons
                    disableFinish={!isValid}
                    onNext={this.props.onNext} 
                    onPrevious={this.props.onPrevious} 
                    onFinish={this.props.onFinish} 
                    renderPrevious={true}
                    renderNext={false}
                    renderFinish={true}
                />
            </div>
        )
    }
}