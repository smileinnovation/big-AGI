import * as React from 'react';

import { Tooltip } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';


/**
 * Tooltip with text that wraps to multiple lines (doesn't go too long)
 */
export const GoodTooltip = (props: {
  title: React.ReactNode,
  placement?: 'top' | 'bottom' | 'top-start',
  isError?: boolean, isWarning?: boolean,
  enableInteractive?: boolean,
  arrow?: boolean,
  variantOutlined?: boolean,
  children: React.JSX.Element,
  sx?: SxProps
}) =>
  <Tooltip
    title={props.title}
    placement={props.placement}
    disableInteractive={!props.enableInteractive}
    arrow={props.arrow}
    variant={(props.isError || props.isWarning) ? 'soft' : props.variantOutlined ? 'outlined' : undefined}
    color={props.isError ? 'danger' : props.isWarning ? 'warning' : undefined}
    sx={{
      maxWidth: { sm: '50vw', md: '25vw' },
      whiteSpace: 'break-spaces',
      ...props.sx,
    }}
  >
    {props.children}
  </Tooltip>;
