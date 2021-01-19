import Loading from '@/components/Loading';
import { Button, TextField } from '@material-ui/core';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { useModel } from 'umi';

type logInProps = any;

const LogIn: React.FC<logInProps> = memo(() => {
  const { handleSubmit, register } = useForm();

  const model = useModel('useAuth', (m) => ({
    onSubmitLogin: m.onSubmitLogin,
    loadingLogin: m.loadingLogin,
  }));

  return (
    <>
      <form
        style={{
          background: 'white',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: 500,
          height: 450,
          alignItems: 'center',
          margin: '1rem auto',
          padding: '2rem',
        }}
        onSubmit={handleSubmit(model.onSubmitLogin)}
      >
        <TextField
          inputRef={register({ required: true })}
          size="small"
          style={{
            background: 'white',
            border: '1px solid blue',
            borderRadius: 4,
          }}
          variant="outlined"
          margin="normal"
          fullWidth
          name="email"
          type="email"
          id="email"
        />
        <TextField
          inputRef={register({ required: true })}
          size="small"
          style={{
            background: 'white',
            border: '1px solid blue',
            borderRadius: 4,
          }}
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          type="password"
          id="password"
        />
        <Button
          type="submit"
          variant={model.loadingLogin ? 'outlined' : 'contained'}
          color="primary"
          startIcon={model.loadingLogin && <Loading disableShrink size={20} />}
        >
          Login
        </Button>
      </form>
    </>
  );
});

export default LogIn;
