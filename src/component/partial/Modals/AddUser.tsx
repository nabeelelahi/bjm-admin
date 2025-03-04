
import { Button, Form, Modal } from 'antd'
import { userForm } from '../../../config/form/user'
import BaseInput, { BaseInputProps } from '../../shared/BaseInput'

function AddUserModal({ open, setOpen, updateData, setUpdateData }: any) {
    return (
        <Modal
            title={'Add User'}
            open={open}
            onCancel={() => {
                setOpen(false)
                setUpdateData(null)
            }}
            footer={null}
            centered
        >
            <Form
                layout='vertical'
            >
                {userForm.map((item) => {
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
                <Button onClick={() => setOpen(false)} >Submit</Button>
            </Form>
        </Modal>
    )
}

export default AddUserModal
