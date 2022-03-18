import React from 'react';
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";
import '@progress/kendo-theme-default/dist/all.css';

export const ButtonBox = ({type, title_btn, disable_group=false, ...props}) => {
  const [disabled, setDisabled] = React.useState(disable_group);

  const handleDisable = () => {
    setDisabled(!disabled);
  };

  const btn_group_text_only = <ButtonGroup disabled={disabled}>
        <Button togglable={true}>Bold</Button>
        <Button togglable={true}>Italic</Button>
        <Button togglable={true}>Underline</Button>
      </ButtonGroup>
  const btn_group_icon_only = <ButtonGroup disabled={disabled}>
        <Button togglable={true} icon="bold"></Button>
        <Button togglable={true} icon="italic"></Button>
        <Button togglable={true} icon="underline"></Button>
      </ButtonGroup>
  const element_btn_group = type == 'text' ? btn_group_text_only : btn_group_icon_only;
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-6 example-col">
        <p>{title_btn}</p>
        {element_btn_group}
        <Button onClick={handleDisable}>Toggle disabled</Button>
      </div>
    </div>
  )
}
