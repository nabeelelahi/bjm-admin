
import { Button, Form, Modal } from 'antd'
import BaseInput, { BaseInputProps } from '../../shared/BaseInput'
import { articleForm } from '../../../config/form/article'

function AddArticleModal({ open, setOpen }: any) {
    return (
        <Modal
            title={'Add User'}
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
            centered
        >
            <Form
                layout='vertical'
            >
                {articleForm.map((item) => {
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

export default AddArticleModal
