import PropTypes from 'prop-types';
// material
import { Popover } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.paper,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`
  }
}));

// ----------------------------------------------------------------------

MenuPopover.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object
};

export default function MenuPopover({ children, sx, pos, ...other }) {
  return (
    <Popover
      anchorOrigin={pos==='right'?{ vertical: 'top', horizontal: 'right' }:{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      PaperProps={{
        sx: {
          mt: pos==='right'?0:1.5,
          ml: 0.5,
          overflow: 'inherit',
          boxShadow: (theme) => theme.customShadows.z20,
          border: (theme) => `solid 1px ${theme.palette.grey[500_8]}`,
          width: 200,
          ...sx
        }
      }}
      {...other}
    >
      {/* <ArrowStyle /> */}
      {children}
    </Popover>
  );
}