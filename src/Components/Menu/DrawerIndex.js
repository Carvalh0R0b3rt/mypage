import { useState } from "react";
import { Button, Drawer, Space } from "antd";
import "./Drawer.css";
import MenuIndex from "./Index"

//O código abaixo foi retirado para melhor compartimentar os menus.
/*import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    key: 'sub1',
    label: 'Informações Gerais',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Local e Presentes',
        type: 'group',
        children: [
          { key: '1', label: 'Espaço ...' },
          { key: '2', label: 'Lista de presentes e sugestões' },
        ],
      },
      {
        key: 'g2',
        label: 'Item 2',
        type: 'group',
        children: [
          { key: '3', label: 'Option 3' },
          { key: '4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '5', label: 'Option 5' },
      { key: '6', label: 'Option 6' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '7', label: 'Option 7' },
          { key: '8', label: 'Option 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      { key: '11', label: 'Option 11' },
      { key: '12', label: 'Option 12' },
    ],
  },
  {
    key: 'grp',
    label: 'Group',
    type: 'group',
    children: [
      { key: '13', label: 'Option 13' },
      { key: '14', label: 'Option 14' },
    ],
  },
];
const MenuIndex = () => {
  const onClick = e => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
    />
  );
};
*/

function DrawerIndex() {
  const [open, setOpen] = useState(false);
  const [placement] = useState("top");
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
        <Button className="Primary" type="primary" onClick={showDrawer}>
          ☲ Menu
        </Button>
      </Space>

      <Drawer
        className="MenuPrimary"
        title="Robert e Raissa Carvalho"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="MenuInd">
        <MenuIndex />
        </div>
      </Drawer>
    </>
  );
}
export default DrawerIndex;
