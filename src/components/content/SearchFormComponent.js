import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import InputField from 'eventbrite_design_system/inputField/InputField';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import Button from 'eventbrite_design_system/button/Button';

export default class SearchFormComponent extends PureComponent {
    static  propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        handleReset: PropTypes.func.isRequired,
    }

    componentWillMount = () => {
        let {handleReset} = this.props;

        handleReset();
    }

    render() {
        let {handleSubmit, handleReset} = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div className="eds-l-mar-left-1 eds-l-mar-top-8">
                    <ValidationFormField v2={true} name="searchText">
                        <InputField
                            id="searchText"
                            label="Search Events"
                            placeholder="... type text"
                            type="text"
                        />
                    </ValidationFormField>
                    <ValidationFormField v2={true} name="selectCategory">
                        <SelectField
                            id="selectCategory"
                            label="Filter by category"
                            values={[
                                {
                                    value: 'any_price',
                                    display: 'Any price',
                                },
                                {
                                    value: 'free_price',
                                    display: 'Free only',
                                },
                            ]}
                        />
                    </ValidationFormField>
                    <Button style="fill" type="submit">SEARCH</Button>
                    <Button onClick={handleReset}>RESET</Button>
                </div>
            </form>
        );
    }
}
