import { forwardRef, ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  disabled?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return <button ref={ref} {...rest} disabled={disabled || loading} />;
  }
);

Button.displayName = 'Button';
