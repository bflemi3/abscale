import * as React from 'react'

interface IWizardNavButtonsProps {
    disableFinish?: boolean
    disableNext?: boolean
    onFinish: () => void
    onNext: () => void
    onPrevious: () => void
    renderFinish: boolean
    renderNext: boolean
    renderPrevious: boolean
}

export default class WizardNavButtons extends React.Component<IWizardNavButtonsProps, any> {

    public render() {
        const { disableFinish, disableNext, onFinish, onNext, onPrevious, renderFinish, renderNext, renderPrevious } = this.props;

        return (
            <div className="row">
                {renderPrevious && // don't render the previous button when it's the first step
                    <div className="col-sm">
                        <button type="button" className="btn btn-secondary" onClick={onPrevious}>Previous</button>
                    </div>
                }

                {renderNext && // don't render the next button when it's the last step
                    <div className="col-sm">
                        <button type="button" className="btn btn-secondary" onClick={onNext} disabled={disableNext}>Next</button>                        
                    </div>
                }
                
                {renderFinish && // only render the finish button when it's the last step
                    <div className="col-sm">
                        <button type="button" className="btn btn-primary" onClick={onFinish} disabled={disableFinish}>Finish</button>
                    </div>
                }
            </div>
        )
    }
}