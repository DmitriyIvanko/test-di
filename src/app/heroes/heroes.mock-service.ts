import { Injectable } from '@angular/core';

import { ServiceBasic } from 'core';

const SERVICE_NAME = 'MOCK_HEROES_MODULE_SERVICE';

@Injectable({
  providedIn: 'root',
})
export class HeroesMockService extends ServiceBasic {
  constructor() {
    super(SERVICE_NAME, Math.random().toString());
  }

  public heroesMethod(): string {
    return SERVICE_NAME;
  }


  private temp = `Features
core: TypeScript 3.5 support (#31615) ([6ece7db]
core: add automatic migration from Renderer to Renderer2 (#30936) (c095597)
bazel: compile targets used for indexing by Kythe with Ivy (#31786) (82055b2)
upgrade: support $element in upgraded component template/templateUrl functions (#31637) (29e1c53)
bazel: allow passing a custom bazel compiler host to ngc compile (#31341) (a29dc96)
bazel: allow passing and rewriting an old bazel host (#31381) (11a208f), closes #31341
Performance Improvements
compiler: avoid copying from prototype while cloning an object (#31638) (24ca582), closes #31627
Bug Fixes
core: DebugElement.listeners not cleared on destroy (#31820) (46b160e)
bazel: increase memory limit of ngc under bazel from 2 to 4 GB (#31784) (5a8eb92)
core: allow Z variations of CSS transforms in sanitizer (#29264) (78e7fdd)
elements: handle falsy initial value (#31604) (7151eae), closes angular/angular#30834
platform-browser: debug element query predicates not compatible with strictFunctionTypes (#30993) (10a1e19)
use the correct WTF array to iterate over (#31208) (9204de9)
bazel: pass custom bazel compiler host rather than rewriting one (#31496) (0c61a35)
compiler-cli: Return original sourceFile instead of redirected sourceFile from getSourceFile (#26036) (3166cff), closes #22524
language-service: Eagarly initialize data members (#31577) (0110de2)
bazel: revert location of xi18n outputs to bazel-genfiles (#31410) (1d3e227)
compiler: give ASTWithSource its own visit method (#31347) (6aaca21)
core: handle undefined meta in injectArgs (#31333) (80ccd6c), closes CLI #14888
service-worker: cache opaque responses in data groups with freshness strategy (#30977) (d7be38f), closes #30968
service-worker: cache opaque responses when requests exceeds timeout threshold (#30977) (93abc35)

8.1.3 (2019-07-26)
Bug Fixes
elements: handle falsy initial value (#31604) (434b796), closes angular/angular#30834
Performance Improvements
compiler: avoid copying from prototype while cloning an object (#31638) (1f3daa0), closes #31627

8.1.2 (2019-07-17)
Bug Fixes
use the correct WTF array to iterate over (#31208) (4aed480)
compiler-cli: Return original sourceFile instead of redirected sourceFile from getSourceFile (#26036) (13dbb98), closes #22524
core: export provider interfaces that are part of the public API types (#31377) (bebf089), closes /github.com/angular/angular/pull/31377#discussion_r299254408 /github.com/angular/angular/blob/9e34670b2/packages/core/src/di/interface/provider.ts#L365-L366 /github.com/angular/angular/blob/9e34670b2/packages/core/src/di/interface/provider.ts#L283-L284 /github.com/angular/angular/blob/9e34670b2/packages/core/src/di/index.ts#L23

8.1.1 (2019-07-10)
Bug Fixes
core: export provider interfaces that are part of the public API types (#31377) (bebf089), closes /github.com/angular/angular/pull/31377#discussion_r299254408 /github.com/angular/angular/blob/9e34670b2/packages/core/src/di/interface/provider.ts#L365-L366 /github.com/angular/angular/blob/9e34670b2/packages/core/src/di/interface/provider.ts#L283-L284 /github.com/angular/angular/blob/9e34670b2/packages/core/src/di/index.ts#L23

8.1.0 (2019-07-02)
Bug Fixes
core: handle undefined meta in injectArgs (#31333) (80ccd6c), closes CLI #14888
service-worker: cache opaque responses in data groups with freshness strategy (#30977) (b0c3453), closes #30968
service-worker: cache opaque responses when requests exceeds timeout threshold (#30977) (a9038ef)

8.1.0-rc.0 (2019-06-26)
Bug Fixes
bazel: exclude all angular schematics folders from metadata build (#31237) (16717fa), closes #31235
bazel: remove unsupported Css pre-processors from ng new (#31234) (e83667a), closes #31209
bazel: update ng new schema to match the current ng new schema of @schematics/angular (#31234) (805fc86), closes #31233
compiler: fix Elements not making a new ParseSourceSpan (#31190) (7035f22)
compiler: stringify Object.create(null) tokens (#16848) (5e53956)
service-worker: registration failed on Safari (#31140) (a5dd4ed), closes #31061
Features
upgrade: provide unit test helpers for wiring up injectors (#16848) (3fb78aa)

8.0.3 (2019-06-26)
Bug Fixes
bazel: exclude all angular schematics folders from metadata build (#31237) (6bad2ca), closes #31235
bazel: remove unsupported Css pre-processors from ng new (#31234) (980bcaf), closes #31209
bazel: update ng new schema to match the current ng new schema of @schematics/angular (#31234) (48f7f65), closes #31233
service-worker: registration failed on Safari (#31140) (f470e69), closes #31061

8.1.0-next.3 (2019-06-19)
Bug Fixes
bazel: builder workspace should use nodejs v10.16.0 (#31088) (a1fc4de)
core: temporarily remove @deprecated jsdoc tag for a TextBedStatic.get overload (#30714) (6bc9c78), closes #30514
language-service: Remove 'any' in getQuickInfoAtPosition (#31014) (a4601ec)

8.0.2 (2019-06-19)
Bug Fixes
bazel: builder workspace should use nodejs v10.16.0 (#31088) (c198dc6)
core: temporarily remove @deprecated jsdoc tag for a TextBedStatic.get overload (#30714) (0a7aebb), closes #30514
language-service: Remove 'any' in getQuickInfoAtPosition (#31014) (7f21449)

8.1.0-next.2 (2019-06-13)
Bug Fixes
bazel: do not modify tsconfig.json (#30877) (b086676)
bazel: exclude components schematics from build (#30825) (05a43ca)
bazel: Load global stylesheet in dev and prod (#30879) (17bfedd)
common: expose the HttpUploadProgressEvent interface as public API (#30852) (5c18f23), closes #30814
service-worker: avoid uncaught rejection warning when registration fails (#30876) (81c2a94)

8.0.1 (2019-06-13)
Bug Fixes
bazel: do not modify tsconfig.json (#30984) (49307f0)
bazel: Load global stylesheet in dev and prod (#30879) (5a7bcd1)
common: expose the HttpUploadProgressEvent interface as public API (#30852) (4e8614b), closes #30814
core: TypeScript related migrations should cater for BOM (#30719) (26e3615), closes /github.com/angular/angular-cli/blob/master/packages/angular_devkit/schematics/src/tree/recorder.ts#L72 #30713
service-worker: avoid uncaught rejection warning when registration fails (#30876) (08c38a1)

8.1.0-next.1 (2019-06-05)
Bug Fixes
core: TypeScript related migrations should cater for BOM (#30719) (80394ce), closes /github.com/angular/angular-cli/blob/master/packages/angular_devkit/schematics/src/tree/recorder.ts#L72 #30713

8.1.0-beta.0 (2019-05-30)
Bug Fixes
`
}
