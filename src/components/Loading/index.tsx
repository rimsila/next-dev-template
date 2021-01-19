import type { CircularProgressProps } from '@material-ui/core';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
  },
  bottom: {
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

type IType = 'backDrop';

type ILoading = {
  type?: IType;
} & CircularProgressProps;

export default function Loading(props: ILoading) {
  const { type, ...rest } = props;
  const classes = useStyles();

  const Loader = (
    <div className={classes.root}>
      <CircularProgress variant="determinate" value={100} color="primary" thickness={5} {...rest} />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        color="secondary"
        className={classes.bottom}
        thickness={5}
        {...rest}
      />
    </div>
  );

  const BackDropLoader = (
    <Backdrop open={true} className={classes.backdrop}>
      {Loader}
    </Backdrop>
  );

  const render = () => {
    switch (type) {
      case 'backDrop':
        return BackDropLoader;
      default:
        return Loader;
    }
  };
  return render();
}
