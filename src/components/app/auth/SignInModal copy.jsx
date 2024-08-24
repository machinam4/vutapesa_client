import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleSigninModal } from "../../../redux/appLayout/actionCreator";

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
    console.log("Clicked cancel button");
    dispatch(toggleSigninModal(false));
  };

  return (
    <>
      <Modal
        title="Sign In"
        open={signInOpen}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        // onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="signInForm">
          {/* Phone Number Input */}
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your phone number!",
              },
              {
                pattern: /^2547\d{8}$/,
                message: "Phone number must be in the format 2547********",
              },
            ]}
          >
            <Input placeholder="Enter phone number (2547********)" />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default SignInModal;
