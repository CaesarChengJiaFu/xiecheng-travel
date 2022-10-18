import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import styles from './RegisterForm.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const RegisterForm: React.FC = () => {
    const navigate = useNavigate()

    const onFinish = async (values: any) => {
        try {
            await axios.post("http://123.56.149.216:8080/auth/register", {
                email: values.username,
                password: values.password,
                confirmPassword: values.confirm
                
            },
            {
                headers: {
                    "x-icode": "68B3BD1D7CD6C14C"
                },
            })
            navigate("/signIn/");
        } catch (error) {
            alert("注册失败")
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleValidate = (rule, value) => {
        if(value && value.length !== 6) {
            return Promise.reject("请输入6位密码！")
        }
        return Promise.resolve()
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className={styles["register-form"]}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    { required: true, message: 'Please input your password!' },
                    // 自定义校验
                    { validator: (rule, value) => handleValidate(rule, value) }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="confirmPassword"
                name="confirm"
                rules={[
                    { required: true, message: 'Please input your password!' },
                    //后面的表单项依赖于前面的表单项，这时是可以使用getFieldValue函数 获取依赖项的值进行判断
                    ({ getFieldValue }) => ({
                        //_ 代表规则对象ruleObject,value传递进来的数据
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject("密码确认不一致！")
                        }
                    })
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};