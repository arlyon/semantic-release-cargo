/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

/**
 * Verify that the conditions for a release are satisfied.
 *
 * The conditions for a release checked by this function are:
 *
 *    1. That the CARGO_REGISTRY_TOKEN environment variable is set and is
 *       non-empty.
 *    2. That it can construct the graph of all of the dependencies in the
 *       workspace.
 *    3. That the dependencies and build-dependencies of all of crates in the
 *       workspace are suitable for publishing to `crates.io`.
 *
 * If `manifest_path` is provided then it is expect to give the path to the
 * `Cargo.toml` file for the root of the workspace. If `manifest_path` is `None`
 * then `verify_conditions` will look for the root of the workspace in a
 * `Cargo.toml` file in the current directory. If one of the conditions for a
 * release are not satisfied then an explination for that will be written to
 * `output`.
 *
 * This implments the `verifyConditions` step for `sementic-release` for a
 * Cargo-based rust workspace.
 */
export function verifyConditions(): void;
/**
 * Prepare the Rust workspace for a release.
 *
 * Preparing the release updates the version of each crate in the workspace and of
 * the intra-workspace dependencies. The `version` field in the `packages` table of
 * each `Cargo.toml` file in the workspace is set to the supplied version. The
 * `version` field of each dependency or build-dependency that is otherwise
 * identified by a workspace-relative path dependencies is also set to the supplied
 * version (the version filed will be added if it isn't already present).
 *
 * This implments the `prepare` step for `sementic-release` for a Cargo-based Rust
 * workspace.
 */
export function prepare(nextReleaseVersion: string): void;
/** Arguments to be passed to the `publish` function. */
export interface PublishArgs {
  /** Whether the `--no-dirty` flag should be passed to `cargo publish`. */
  noDirty?: boolean
  /** A map of packages and features to pass to `cargo publish`. */
  features?: Record<string, Array<string>>
};
/**
 * Publish the publishable crates from the workspace.
 *
 * The publishable crates are the crates in the workspace other than those
 * whose `package.publish` field is set to `false` or that includes a registry other
 * than `crates.io`.
 *
 * This implments the `publish` step for `sementic-release` for a Cargo-based
 * Rust workspace.
 */
export function publish(noDirty: boolean): void;
