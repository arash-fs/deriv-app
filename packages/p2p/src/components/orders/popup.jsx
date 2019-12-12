import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import {
    Formik,
    Field,
    Form }                  from 'formik';
import {
    Checkbox,
    Button,
    ThemedScrollbars }      from 'deriv-components';
import IconClose            from '../../assets/icon-close.jsx';
import { localize }         from '../i18next';

class Popup extends Component {
    handleSubmit = (values, { setSubmitting }) => {
        // TODO [p2p-remove-console] this console is to avoid unused variable eslint linter
        // eslint-disable-next-line no-console
        console.log(values);
        this.props.onClickConfirm();
        setSubmitting(false);
    }

    render() {
        const {
            cancel_text,
            confirm_text,
            onClickConfirm,
            has_cancel,
            message,
            need_confirmation,
            offer,
            onCancel,
            title,
        } = this.props;

        return (
            <>
                <div className='orders__popup'>
                    <div className='orders__popup-header'>
                        <div className='orders__popup-header_wrapper'>
                            <h2 className='orders__popup-header--title'>{title}</h2>
                            <IconClose className='orders__popup-close_icon' onClick={onCancel} />
                        </div>
                    </div>
                    {/* TODO: [p2p-fix-component-pollution]
                        the value inside form should be from outside of components instead
                    */}
                    {need_confirmation ? (
                        <Formik
                            initialValues={{
                                need_confirmation: false,
                            }}
                            onSubmit={this.handleSubmit}
                        >
                            {({ isSubmitting, setFieldValue, values }) => (
                                <Form noValidate>
                                    <ThemedScrollbars autoHide style={{ height: '124px' }}>
                                        <div className='orders__popup-content'>
                                            {message}
                                            <div className='orders__popup-field'>
                                                <Field name='need_confirmation'>
                                                    {({ field }) => (
                                                        <Checkbox
                                                            {...field}
                                                            onChange={() =>
                                                                setFieldValue(
                                                                    'need_confirmation',
                                                                    !values.need_confirmation,
                                                                )
                                                            }
                                                            defaultChecked={
                                                                values.need_confirmation
                                                            }
                                                            label={localize('I have received {{offer}} {{price}}', {
                                                                offer: offer.currency,
                                                                price: offer.fix_price,
                                                            })}
                                                            classNameLabel='orders__popup-field_text'
                                                        />
                                                    )}
                                                </Field>
                                            </div>
                                        </div>
                                    </ThemedScrollbars>
                                    <div className='orders__popup-footer'>
                                        <Button
                                            is_disabled={isSubmitting || !values.need_confirmation}
                                            primary
                                        >
                                            {localize(`Release ${offer.asset} ${offer.amount}`)}
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    ) : (
                        <>
                            <ThemedScrollbars autoHide style={{ height: '88px' }}>
                                <div className='orders__popup-content'>
                                    {message}
                                </div>
                            </ThemedScrollbars>
                            <div className='orders__popup-footer'>
                                {has_cancel && <Button onClick={onCancel} secondary>{cancel_text}</Button>}
                                <Button onClick={onClickConfirm} primary>{confirm_text}</Button>
                            </div>
                        </>
                    )}
                </div>
            </>
        );
    }
}

Popup.propTypes = {
    cancel_text      : PropTypes.string,
    confirm_text     : PropTypes.string,
    has_cancel       : PropTypes.bool,
    message          : PropTypes.string,
    need_confirmation: PropTypes.bool,
    offer            : PropTypes.object,
    onCancel         : PropTypes.func,
    onClickConfirm   : PropTypes.func,
    title            : PropTypes.string,
};
 
export default Popup;