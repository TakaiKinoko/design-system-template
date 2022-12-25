import { forwardRef, ComponentProps } from 'react';

interface IconButtonProps extends ComponentProps<'button'> {
  /** If button is in disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Aria title should be mandatory for icon buttons */
  'aria-label'?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ disabled, loading, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest} disabled={disabled || loading}>
        {rest.children}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';
