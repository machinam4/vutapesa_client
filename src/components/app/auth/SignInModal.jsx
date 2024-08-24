import React, { useState } from "react";
import { Button, Modal, Form, Input, Row, Col } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleSigninModal } from "../../../redux/appLayout/actionCreator";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

function SignInModal() {
  const dispatch = useDispatch();
  const { signInOpen } = useSelector((state) => {
    return { signInOpen: state.appLayout.signinOpen };
  });
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form values:", values);
        setConfirmLoading(true);
        setTimeout(() => {
          dispatch(toggleSigninModal(false));
          setConfirmLoading(false);
        }, 2000);
      })
      .catch((info) => {
        console.log("Validation failed:", info);
      });
  };

  const handleCancel = () => {
    dispatch(toggleSigninModal(false));
  };

  return (
    <>
      <Modal
        title={null}
        open={signInOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
        className="custom-login-modal"
        closeIcon={<span style={{ color: "white", fontSize: "18px" }}>×</span>}
      >
        <div className="modal-header bg-yellow-500 h-16 relative">
          <h2 className="text-white text-center text-xl font-semibold absolute inset-0 flex justify-center items-center">
            Login
          </h2>
        </div>
        <div className="modal-body px-6 py-4 bg-gray-100">
          <Form form={form} layout="vertical" name="signInForm">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="emailOrPhone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email or phone!",
                    },
                  ]}
                >
                  <Input placeholder="E-mail / Phone" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Password..."
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <div className="flex justify-between items-center">
              <a href="#" className="text-orange-500 text-sm">
                I forgot my password...
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-yellow-500 border-none hover:bg-yellow-600 text-white"
                onClick={handleOk}
              >
                Login
              </Button>
            </div>
          </Form>
        </div>
        <div className="modal-footer py-4 bg-gray-800 text-center">
          <p className="text-white">
            I do not have an account
            <a href="#" className="text-yellow-500 ml-2 font-semibold">
              Sign Up →
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
}

export default SignInModal;
