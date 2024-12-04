<script setup lang="ts">
import { useQRCode } from '@vueuse/integrations/useQRCode'
import { useData, withBase } from 'vitepress'
import { socialList } from '../utils'
import Link from './Link.vue'
import GPL from '../icons/GPL.vue'

const { theme, frontmatter } = useData()
const qrcode = useQRCode(theme.value.footer.qrcodeLink)
</script>

<template>
  <div class="container slide-enter" v-if="frontmatter.footer !== false">
    <footer class="footer">
      <div class="footer__content">
        <nav class="footer__navigation" v-for="item in theme.footer.navigation">
          <h3 class="footer__title">{{ item.title }}</h3>
          <ul class="footer__list">
            <li v-for="ic in item.items" class="footer__item">
              <Link
                :href="withBase(ic.link)"
                :title="ic.text + '（' + withBase(ic.link) + '）'"
                noIcon
              >
                {{ ic.text }}
              </Link>
            </li>
          </ul>
        </nav>

        <div class="qrcode">
          <img :src="qrcode" alt="QR Code" class="qrcode__img" />
          <h4 class="qrcode__title">{{ theme.footer.qrcodeTitle }}</h4>
          <p class="qrcode__description">{{ theme.footer.qrcodeMessage }}</p>
        </div>
      </div>

      <div class="footer__socials">
        <div class="footer__copyright">
          <GPL/>
          <p>GPL-3.0 Licensed<br />Kotatsu Developers</p>
        </div>

        <ul>
          <li
            class="footer__social-item"
            v-for="item in socialList"
          >
            <a
              :href="item.link"
              :aria-label="item.title"
              :title="item.title"
              target="_blank"
              class="footer__social-link"
              rel="noopener noreferrer"
              v-html="item.icon">
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.container {
  z-index: 1;
  position: relative;
  right: 0;
  bottom: 0;
  padding: 0 32px;
  background-color: var(--vp-c-bg-alt);

  .is-home ~ & .footer {
    max-width: 1152px;
  }
}

.footer {
  font-size: 0.87rem;
  line-height: 1.25rem;
  margin: 0 auto;

  &:first-child {
    padding-top: 2.5rem;
  }
}

.footer__socials {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  align-items: center;

  & > ul {
    display: flex;
    gap: 1rem;

    .footer__social-item {
      .footer__social-link {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: color 0.25s;
        color: var(--vp-c-text-2);
        width: 2rem;
        height: 2rem;

        &:hover {
          color: var(--vp-c-text-1);
        }

        :deep(svg) {
          width: 1.5rem;
          height: 1.5rem;
          fill: currentColor;
        }
      }
    }
  }

  .footer__copyright {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
      color: var(--vp-c-text-2);
    }
  }
}

.footer__navigation {
  width: 100%;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  place-items: self-start;
  border-bottom: 1px solid var(--vp-c-divider);
  overflow: hidden;

  &:first-child {
    border-top: 1px solid var(--vp-c-divider);
  }

  .footer__title {
    width: 100%;
    user-select: all;
    font-weight: 700;
    line-height: 1.33337;
    color: var(--vp-c-text-2);
    text-transform: uppercase;
    padding: 1rem 0;
    opacity: 0.8;

    &::after {
      content: '+';
      filter: invert(50%);
      float: right;
      width: 14px;
      height: 14px;
      text-align: center;
      margin-right: 8px;
      transition: transform 0.3s ease;
    }

    &:hover {
      &::after {
        transform: rotate(45deg) scale(1.08);
      }
    }

    &:hover ~ ul,
    ~ ul:hover {
      height: 100%;
    }
  }

  .footer__list {
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: 0.3s ease;

    .footer__item {
      &:last-child {
        margin-bottom: 16px;
      }

      a {
        display: inline-block;
        transition: color 0.25s cubic-bezier(0.25, 0.1, 0.25, 1);
        color: var(--vp-c-text-1);
        padding: 6px 14px;
        width: 100%;

        &:hover {
          color: var(--vp-c-brand);
        }
      }
    }
  }
}

.qrcode {
  width: 192px;
  padding: 1.5rem;
  box-sizing: border-box;
  border-radius: var(--vp-border-radius);
  background-color: var(--vp-c-bg-soft-up);
  border: 4px solid var(--vp-c-divider);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-self: end;
  gap: 0.5rem;
  line-height: 22px;
  color: var(--vp-c-text-2);

  .qrcode__img {
    box-shadow: var(--vp-shadow-1);
    border-radius: var(--vp-border-radius);
  }

  .qrcode__title {
    margin-top: 4px;
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: var(--vp-c-text-1);
  }

  .qrcode__description {
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .footer {
    & > :last-child {
      border-top: 1px solid var(--vp-c-divider);
   }
  }

  .footer__socials {
    flex-direction: row;
    align-items: unset;
    justify-content: space-between;
  }

  .footer__content {
    display: grid;
    place-items: start;
    grid-auto-flow: column;
    gap: 2rem;
    padding-bottom: 2.5rem;

    &:last-child {
      border-top: 1px solid var(--vp-c-divider);
    }

    .footer__navigation {
      place-items: self-start;
      border: none;
      border-top: none;

      .footer__title {
        &::after {
          display: none;
        }
      }

      .footer__list {
        height: 100%;

        & > .footer__item > a {
          padding: 0;
        }
      }
    }
  }

  .qrcode {
    display: flex;
  }
}

@media (min-width: 960px) {
  .VPSidebar ~ .container {
    width: calc(100% - var(--vp-sidebar-width));
    left: var(--vp-sidebar-width);
  }
}

@media (min-width: 1440px) {
  .footer {
    max-width: 945px;
  }
}
</style>
