from tutor import hooks

# Install brand/token package during MFE build
hooks.Filters.ENV_PATCHES.add_item((
    "mfe-dockerfile-post-npm-install",
    r"""
# Install CBA brand package
RUN npm install --no-save @cba/brand
"""
))

# Import token CSS globally
hooks.Filters.ENV_PATCHES.add_item((
    "mfe-env-config-buildtime-imports",
    r"""
import '@cba/brand/dist/tokens.css';
import '@cba/brand/dist/brand-overrides.css';
"""
))

# Optional runtime config
hooks.Filters.ENV_PATCHES.add_item((
    "mfe-env-config-runtime-definitions",
    r"""
CBA_BRAND: "CBA",
"""
))
