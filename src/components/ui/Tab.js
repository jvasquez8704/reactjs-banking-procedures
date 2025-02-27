import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'antd';

const { Meta } = Card;

const Tab = ({ id, image, desc, getCurrentTab }) => {

    const currentTab = useSelector(({ ui }) => ui.tab);
    
    const onTab = () => {
        getCurrentTab(id, desc);
    }
    return (
        <div className={`stc-tab-border ${id === currentTab ? 'stc-selected-tab' : ''}`}>
            <Card
                hoverable
                cover={<img alt={desc.title || ''} src={image || ''} className="stc-icon-size" />}
                className="stc-tab"
                onClick={onTab}
            >
                <Meta title={desc.title || ''} />
            </Card>
            <div className="stc-card-selected-border"></div>
        </div>
    );
};

export default Tab;