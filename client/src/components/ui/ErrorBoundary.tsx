import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryState {
  error: Error | null;
}

/**
 * Quiet error boundary. If a component throws, the ambient shell survives and
 * the student gets a calm recovery card instead of a white screen.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = { error: null };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  public override componentDidCatch(error: Error, info: ErrorInfo): void {
    // Wire this to your telemetry sink (Application Insights / Sentry) in prod.
    console.error('[conceptual-obgyn] render failure', error, info.componentStack);
  }

  private readonly handleReset = (): void => {
    this.setState({ error: null });
  };

  public override render(): ReactNode {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="relative flex min-h-dvh items-center justify-center px-6">
        <div className="glass-card w-full max-w-md rounded-3xl p-8 text-center">
          <h1 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Something interrupted the workspace
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Your offline data is untouched. Reload to continue where you left off.
          </p>
          <p className="mt-4 truncate font-mono text-xs text-slate-400 dark:text-slate-500">{error.message}</p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <button type="button" className="action-primary" onClick={() => window.location.reload()}>
              Reload
            </button>
            <button type="button" className="action-quiet" onClick={this.handleReset}>
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
