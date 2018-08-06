import * as React from 'react'

// interface IStepFormInterface {}

interface IStepFormProps {
    onChange: (data: object) => void
}

export default class StepForm extends React.Component<IStepFormProps, any> {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange(event: React.FormEvent<HTMLDivElement | HTMLFormElement>) {
        const target = event.target as HTMLFormElement;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const data = { [name]: value };

        this.props.onChange(data);
    }
    
    public render() {
        return (
            <form onChange={this.handleChange}>
                {this.props.children}
            </form>
        )
    }
}