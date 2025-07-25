import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import "./Drawer.css";

const DrawerIndex = () => {
  const [open, setOpen] = useState(false);
  const [placement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  /*
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  */
  return (
    <>
      <Space>
        {/*<Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        */}
        <Button className="Primary" type="primary" onClick={showDrawer}>
          ☲ Menu
        </Button>
      </Space>

      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default DrawerIndex;
