
import { Button, Form, Modal } from 'antd'
import { userForm } from '../../../config/form/user'
import BaseInput, { BaseInputProps } from '../../shared/BaseInput'
import { AddModalProps } from '../../../types'
import useFormOperations from '../../../hooks/useFormOperations'

function AddUserModal(props: AddModalProps) {

    const { open, cbCancel, updateData } = props;
    const { handleFinish, loading } = useFormOperations({ ...props, url: 'user' })

    const onFinish = (values: Record<string, unknown>) => {
        handleFinish({ ...values, password: 'BJM@123', role: 'user' })
    }

    return (
        <Modal
            title={'Add User'}
            open={open === 'post' || open === 'patch'}
            onCancel={cbCancel}
            footer={null}
            centered
        >
            <Form
                layout='vertical'
                initialValues={updateData}
                onFinish={onFinish}
            >
                {userForm.map((item) => {
                    return (
                        <Form.Item
                            label={item.label}
                            key={item.name}
                            name={item.name}
                            rules={item.rules as never[]}
                        >
                            <BaseInput disabled={open === 'patch' && item.name === 'email'} {...item as BaseInputProps} />
                        </Form.Item>
                    )
                })}
                <Button loading={loading} htmlType='submit' >Submit</Button>
            </Form>
        </Modal>
    )
}

export default AddUserModal
