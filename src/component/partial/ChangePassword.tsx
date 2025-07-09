
import { Button, Form, notification } from 'antd'
import BaseInput, { BaseInputProps } from '../shared/BaseInput'
import { changePasswordForm } from '../../config/form/changePassword'
import { useRequest } from '../../hooks/useRequest'

function ChangePasswordComponent() {
    const [form] = Form.useForm()
    const { execute, loading } = useRequest('user/change-password', 'post', { type: 'delay' })
    const onFinish = (values: { oldPassword: string, newPassword: string, confirmPassword: string }) => {
        execute({
            body: values,
            cbSuccess: () => form.resetFields(),
            cbFailure: (res: any) => res.message.map((m: string) => notification.error({
                message: 'Validation Error',
                description: m
            }))
        })
    }
    return (
        <Form
            layout='vertical'
            form={form}
            onFinish={onFinish}
        >
            {changePasswordForm.map((item) => {
                return (
                    <Form.Item
                        label={item.label}
                        key={item.name}
                        name={item.name}
                        rules={item.rules as never[]}
                    >
                        <BaseInput {...{ ...item, type: 'password' } as BaseInputProps} />
                    </Form.Item>
                )
            })}
            <Button
                className={`rounded-[8px] h-[40px] roboto-medium px-8 text-white border-0 hover:!text-white`}
                style={{ backgroundColor: '#0B6990' }}
                loading={loading}
                htmlType='submit'  >Submit</Button>
        </Form>
    )
}

export default ChangePasswordComponent
