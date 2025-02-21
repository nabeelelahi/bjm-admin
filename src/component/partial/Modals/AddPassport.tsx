
import { Button, Form, Modal } from 'antd'
import BaseInput, { BaseInputProps } from '../../shared/BaseInput'
import { passportForm } from '../../../config/form/passport'

function AddPassportModal({ open, setOpen }: any) {
    return (
        <Modal
            title={'Add Passport'}
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
        >
            <Form
                layout='vertical'
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
                <Button onClick={() => setOpen(false)} >Submit</Button>
            </Form>
        </Modal>
    )
}

export default AddPassportModal
