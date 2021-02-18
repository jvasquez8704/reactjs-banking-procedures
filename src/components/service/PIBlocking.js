import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Form, Button } from 'antd';
import { useForm as validatorForm } from "react-hook-form";

import { setError, unsetError, updateStep } from '../../actions/ui';
import UserInfoTable from '../custom/UserInfoTable';
import CustomSelect from '../ui/form/CustomSelect';
import { setAchAccount, setStatusCard } from '../../actions/service';
import { useForm } from '../../hooks/useForm';
import CustomInput from '../ui/form/CustomInput';


const PIBlocking = () => {
    const { handleSubmit, errors , control } = validatorForm();
    const dispatch = useDispatch();
    const data = useSelector(({ ach, ui, auth }) => ({ ach, download: ui.download, auth }));
    const { ach:info, download, auth } = data;
    const accounts = info.products ? info.products.productsItems : [];
    const types = info.cardTypes;
    const reasonsBlock = info.reasonBlock;
    const [{ reason }, handleInputChange] = useForm({reason:''});
    const [account, setAccount] = useState('');
    const [status, setStatus] = useState('');
    const [card, setCard] = useState({});
    const [type, setType] = useState('');

    const handleOnSubmit = ({ reason }) => {
        const { identity } = auth;
        const { token } = info;
        if (account === '') {
            dispatch(setError('Selecciona una tarjeta'));
            return;
        }

        // if (type === '') {
        //     dispatch(setError('Selecciona tipo de gestión'));
        //     return;
        // }
        dispatch(setStatusCard(identity, token, card));
    }

    const handleChange = value => {
        setType(value);
    }

    const handleChangeCard = value => {
      const cardResult = accounts.filter((acc) => acc.product === value);
      if (cardResult && Array.isArray(cardResult) && cardResult.length === 1) {
        const { status } = cardResult[0];
        setStatus(status);
        setCard(cardResult[0]);
      }
      dispatch(setAchAccount(value));
      setAccount(value);
    };

    const handleBack = () => {
        dispatch(updateStep(0));
        dispatch(unsetError());      
    }
    
    return (
      <Form
        name="basic"
        layout="vertical"
        className="stc-form"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        {/* <Form.Item name="info-item">
          <UserInfoTable info={info} />
        </Form.Item> */}

        <CustomSelect
          fieldName="account-item"
          iLabel="Selecciona Tarjeta"
          errMjs="Por favor selecciona una tarjeta"
          iPlaceholder="Selecciona tarjeta"
          items={accounts}
          iHandleSelectChange={handleChangeCard}
          irules={{
            required: {
              value: true,
              message: "Se ocupa la tarjeta",
            },
          }}
        />

        {/* <CustomInput
          fieldName="reason"
          iLabel="Motivo de Bloqueo"
          errMjs={errors.reason && errors.reason.reason}
          iTypeErr={`${errors.reason ? "error" : ""}`}
          iPlaceholder="Ingresa motivo"
          ihandleInputChange={handleInputChange}
          icontrol={control}
          irules={{
            required: {
              value: true,
              message: "Por favor ingresa motivo",
            },
          }}
        /> */}

        {/* <CustomSelect
          fieldName="block-type-item"
          iLabel="Tipo de Gestión"
          errMjs="Por favor selecciona tipo de gestión"
          iPlaceholder="Selecciona tipo de gestión"
          items={reasonsBlock}
          iHandleSelectChange={handleChange}
          irules={{
            required: {
              value: true,
              message: "Se requiere tipo de gestión",
            },
          }}
        /> */}

        <Form.Item>
          <Button type="primary" className="stc-button" htmlType="submit">
            {`${
              status === ""
                ? "Siguiente"
                : status == !"00"
                ? "Bloquear"
                : "Desbloquear"
            }`}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            type="default"
            className="btn stc-button-default"
            htmlType="button"
            onClick={handleBack}
          >
            Atrás
          </Button>
        </Form.Item>
      </Form>
    );
};

export default PIBlocking;