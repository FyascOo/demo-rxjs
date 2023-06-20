import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'demo-rxjs-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `test`,
 
})
export class AppComponent {
  title = 'demo-rxjs';
}
