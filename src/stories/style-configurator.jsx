import * as React from 'react';
import { Label } from '@progress/kendo-react-labels';
import { ButtonGroup, Button } from '@progress/kendo-react-buttons';
import { DropDownList } from '@progress/kendo-react-dropdowns';
export const StyleConfigurator = props => {
  const {
    shapes,
    onShapeChange,
    sizes,
    onSizeChange,
    themeColors,
    onThemeColorChange,
    fillModes,
    onFillModeChange,
    roundedOptions,
    onRoundedChange
  } = { ...StyleConfigurator.defaultProps,
    ...props
  };

  const handleShapeChange = shape => {
    onShapeChange(shape);
  };

  const handleSizeChange = event => {
    onSizeChange(event.value);
  };

  const handleThemeColorChange = event => {
    onThemeColorChange(event.value);
  };

  const handleFillModeChange = event => {
    onFillModeChange(event.value);
  };

  const handleRoundedChange = event => {
    onRoundedChange(event.value);
  };

  return <div style={{
    margin: '-30px -30px 30px -30px'
  }}>
        <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
          <span className="k-color-primary" style={{
        textTransform: 'uppercase',
        padding: '4px 0'
      }}>Configurator</span>
        </div>
        <div className="example-config" style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}>
          {props.shape !== undefined && <span className="k-form-field" style={{
        flex: "1 1 0px"
      }}>
            <Label>
              Shape
              <div className="k-form-field-wrap">
                <ButtonGroup>
                  {shapes.map(shape => <Button key={shape} togglable={true} selected={props.shape === shape} onClick={handleShapeChange.bind(undefined, shape)}>
                      {shape || 'None'}
                    </Button>)}
                </ButtonGroup>
              </div>
            </Label>
          </span>}
          {props.size !== undefined && <span className="k-form-field" style={{
        flex: "1 1 0px"
      }}>
            <Label>
              Size
              <div className="k-form-field-wrap">
                <DropDownList data={sizes} value={props.size} onChange={handleSizeChange} style={{
              minWidth: 120
            }} />
              </div>
            </Label>
          </span>}
          {props.themeColor !== undefined && <span className="k-form-field" style={{
        flex: "1 1 0px"
      }}>
            <Label>
              Theme Color
              <div className="k-form-field-wrap">
                <DropDownList data={themeColors} value={props.themeColor} onChange={handleThemeColorChange} itemRender={ColorItemRender} style={{
              minWidth: 120
            }} />
              </div>
            </Label>
          </span>}
          {props.fillMode !== undefined && <span className="k-form-field" style={{
        flex: "1 1 0px"
      }}>
            <Label>
              Fill Mode
              <div className="k-form-field-wrap">
                <DropDownList data={fillModes} value={props.fillMode} onChange={handleFillModeChange} style={{
              minWidth: 120
            }} />
              </div>
            </Label>
          </span>}
          {props.rounded !== undefined && <span className="k-form-field" style={{
        flex: "1 1 0px"
      }}>
            <Label>
              Border Radius
              <div className="k-form-field-wrap">
                <DropDownList data={roundedOptions} value={props.rounded} onChange={handleRoundedChange} style={{
              minWidth: 120
            }} />
              </div>
            </Label>
          </span>}
        </div>
      </div>;
};

const ColorItemRender = (li, itemProps) => {
  const itemChildren = <React.Fragment>
        {li.props.children} <span style={{
      width: 16,
      height: 16,
      background: 'currentColor',
      display: "inline-block"
    }} className={`k-color-${itemProps.dataItem}`} />
      </React.Fragment>;
  return React.cloneElement(li, { ...li.props,
    style: { ...li.props.style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, itemChildren);
};

StyleConfigurator.defaultProps = {
  shapes: ['rectangle', 'square'],
  onShapeChange: () => {
    /* noop */
  },
  sizes: ['small', 'medium', 'large'],
  onSizeChange: () => {
    /* noop */
  },
  themeColors: ['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse'],
  onThemeColorChange: () => {
    /* noop */
  },
  fillModes: ['solid', 'outline', 'flat', 'link'],
  onFillModeChange: () => {
    /* noop */
  },
  roundedOptions: ['small', 'medium', 'large', 'full'],
  onRoundedChange: () => {
    /* noop */
  }
};
