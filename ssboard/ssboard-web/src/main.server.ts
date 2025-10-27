import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config.server';

// The SSR runtime will call this. Don't invoke bootstrapApplication at top-level.
export function bootstrap() {
  return bootstrapApplication(AppComponent, appConfig);
}

export default bootstrap;
