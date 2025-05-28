
import { Button, Form, Modal } from 'antd'
import BaseInput, { BaseInputProps } from '../../shared/BaseInput'
import { passportForm } from '../../../config/form/passport'
import { AddModalProps } from '../../../types';
import useFormOperations from '../../../hooks/useFormOperations';

function AddPassportModal(props: AddModalProps) {
    const { open, cbCancel, updateData } = props;
    const { handleFinish, loading } = useFormOperations({ ...props, url: 'passport' })

    const onFinish = (values: Record<string, unknown>) => {
        handleFinish(values)
    }
    return (
        <Modal
            title={'Add Passport'}
            open={open === 'post' || open === 'patch'}
            onCancel={cbCancel}
            footer={null}
            centered
        >
            <Form
                layout='vertical'
                onFinish={onFinish}
                initialValues={updateData}
            >
                {passportForm.map((item) => {
                    return (
                        <Form.Item
                            label={item.label}
                            key={item.name}
                            name={item.name}
                            rules={item.rules as never[]}
                        >
                            <BaseInput {...item as BaseInputProps} />
                        </Form.Item>
                    )
                })}
                <Button
                    className={`rounded-[8px] h-[40px] roboto-medium px-8 text-white border-0 hover:!text-white`}
                    style={{ backgroundColor: '#0B6990' }}
                    loading={loading} htmlType='submit' >Submit</Button>
            </Form>
        </Modal>
    )
}

export default AddPassportModal
