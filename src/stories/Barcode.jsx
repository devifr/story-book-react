import React from 'react';
import { Barcode } from '@progress/kendo-react-barcodes';
import '@progress/kendo-theme-default/dist/all.css';

export const BarcodeData = ({ type, label, ...props }) => {
  return (
    <Barcode type={type} value={label} />
  );
};
