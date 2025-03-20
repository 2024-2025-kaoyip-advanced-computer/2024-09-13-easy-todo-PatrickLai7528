import { Menu } from 'antd';

export const MyMenu = () => {
  const items = [
        {
          key: 'sub1',
          label: '全部',
        },
        {
          key:　"not_completed",
          label:"未完成"
        },
        {
          key: "completed",
          label:"已完成"
        },
      ];

    return <Menu
        style={{
            width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
    />
}