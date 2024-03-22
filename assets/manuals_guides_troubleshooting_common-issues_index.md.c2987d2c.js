import{_ as e,c as o,o as t,X as s}from"./chunks/framework.43b9ffd8.js";const g=JSON.parse(`{"title":"Common issues","description":"Facing issues with a source or the app? Here's how to tackle common challenges.","frontmatter":{"title":"Common issues","description":"Facing issues with a source or the app? Here's how to tackle common challenges.","footer":false},"headers":[],"relativePath":"manuals/guides/troubleshooting/common-issues/index.md","filePath":"manuals/guides/troubleshooting/common-issues/index.md","lastUpdated":1711086476000,"breadcrumbs":[{"text":"User manual","link":"/manuals/guides/getting-started/"},{"text":"Guides","items":[{"text":"Getting started","link":"/manuals/guides/getting-started/"},{"text":"Troubleshooting","link":"/manuals/guides/troubleshooting/","collapsed":true,"items":[{"text":"Common issues","link":"/manuals/guides/troubleshooting/common-issues/"},{"text":"Diagnosis","link":"/manuals/guides/troubleshooting/diagnosis/"}]},{"text":"Backups","link":"/manuals/guides/backups/"},{"text":"Tracking","link":"/manuals/guides/tracking/"},{"text":"Categories","link":"/manuals/guides/categories/"},{"text":"Synchronization","link":"/manuals/guides/synchronization/"}]},{"text":"Troubleshooting","link":"/manuals/guides/troubleshooting/","collapsed":true,"items":[{"text":"Common issues","link":"/manuals/guides/troubleshooting/common-issues/"},{"text":"Diagnosis","link":"/manuals/guides/troubleshooting/diagnosis/"}]},{"text":"Common issues","link":"/manuals/guides/troubleshooting/common-issues/"}]}`),a={name:"manuals/guides/troubleshooting/common-issues/index.md"},r=s('<h1 id="common-issues" tabindex="-1">Common issues <a class="header-anchor" href="#common-issues" aria-label="Permalink to &quot;Common issues&quot;">​</a></h1><p>Facing issues with a source or the app? Here&#39;s how to tackle common challenges.</p><h2 id="basic-issues" tabindex="-1">Basic issues <a class="header-anchor" href="#basic-issues" aria-label="Permalink to &quot;Basic issues&quot;">​</a></h2><h3 id="slow-loading" tabindex="-1">Slow loading <a class="header-anchor" href="#slow-loading" aria-label="Permalink to &quot;Slow loading&quot;">​</a></h3><p>Sources being slow could stem from site slowness, your internet, or source-imposed rate limits/IP bans.</p><h2 id="advanced-errors" tabindex="-1">Advanced errors <a class="header-anchor" href="#advanced-errors" aria-label="Permalink to &quot;Advanced errors&quot;">​</a></h2><h3 id="unable-to-resolve-host-connection" tabindex="-1"><code>Unable to resolve host</code> / <code>Connection failed</code> / <code>Failed to connect to</code> / <code>timeout</code> / <code>connection reset</code> <a class="header-anchor" href="#unable-to-resolve-host-connection" aria-label="Permalink to &quot;`Unable to resolve host` / `Connection failed` / `Failed to connect to` / `timeout` / `connection reset`&quot;">​</a></h3><p>These errors indicate connection issues. Possible causes include:</p><ul><li>Weak internet connection.</li><li>App lacks internet access.</li><li>Your ISP has blocked the site.</li><li>The site is down.</li></ul><p>Try these solutions:</p><ul><li>Enable <strong>DNS over HTTPS</strong>.</li><li>Change network (Wi-Fi, mobile data, VPN).</li><li>Reboot router.</li></ul><h3 id="javasecuritycertcertpathvalidatorexception" tabindex="-1"><code>java.security.cert.CertPathValidatorException</code> / <code>Chain validation failed</code> <a class="header-anchor" href="#javasecuritycertcertpathvalidatorexception" aria-label="Permalink to &quot;`java.security.cert.CertPathValidatorException` / `Chain validation failed`&quot;">​</a></h3><p>Validation issue with source&#39;s certificate.</p><p>Try these solutions:</p><ul><li>Check expired certificate, use SSL checker.</li><li>Set correct device date and time.</li><li>Change network (Wi-Fi, mobile data, VPN).</li><li>Enable <strong>Ignore SSL errors</strong> in <span class="shortcode navigation main_three_dots"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-vertical</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path></svg><span class="name">Three dots</span></span> <span class="shortcode navigation direction"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z"></path></svg></span> <span class="shortcode navigation main_settings"><span class="name">Settings</span></span> <span class="shortcode navigation direction"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z"></path></svg></span> <span class="shortcode navigation network"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-0.32-1.25-0.78-2.45-1.38-3.56 1.84 0.63 3.37 1.91 4.33 3.56zM12 4.04c0.83 1.2 1.48 2.53 1.91 3.96h-3.82c0.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s0.1-1.36 0.26-2h3.38c-0.08 0.66-0.14 1.32-0.14 2 0 0.68 0.06 1.34 0.14 2H4.26zm0.82 2h2.95c0.32 1.25 0.78 2.45 1.38 3.56-1.84-0.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c0.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-0.83-1.2-1.48-2.53-1.91-3.96h3.82c-0.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-0.09-0.66-0.16-1.32-0.16-2 0-0.68 0.07-1.35 0.16-2h4.68c0.09 0.65 0.16 1.32 0.16 2 0 0.68-0.07 1.34-0.16 2zm0.25 5.56c0.6-1.11 1.06-2.31 1.38-3.56h2.95c-0.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c0.08-0.66 0.14-1.32 0.14-2 0-0.68-0.06-1.34-0.14-2h3.38C19.9 10.64 20 11.31 20 12s-0.1 1.36-0.26 2h-3.38z"></path></svg><span class="name">Network</span></span></li><li>Reboot device.</li></ul><h2 id="http-errors" tabindex="-1">HTTP errors <a class="header-anchor" href="#http-errors" aria-label="Permalink to &quot;HTTP errors&quot;">​</a></h2><p>Encountering HTTP errors? Here&#39;s what they mean and how to address them.</p><h3 id="http-error-403-forbidden" tabindex="-1"><code>HTTP Error: 403</code> - Forbidden <a class="header-anchor" href="#http-error-403-forbidden" aria-label="Permalink to &quot;`HTTP Error: 403` - Forbidden&quot;">​</a></h3><p>Possible reasons for this error:</p><ul><li>The selected source has Cloudflare protection. Check the <a href="/manuals/guides/troubleshooting/#cloudflare/">Cloudflare guide</a> for solutions.</li><li>The source might be down, removed the series, or banned your IP. <blockquote><p>Open WebView to confirm.</p></blockquote></li></ul><h3 id="http-error-404-not-found" tabindex="-1"><code>HTTP Error: 404</code> - Not Found <a class="header-anchor" href="#http-error-404-not-found" aria-label="Permalink to &quot;`HTTP Error: 404` - Not Found&quot;">​</a></h3><p>This error likely indicates a down source or removed series.</p><ul><li>Use <strong>WebView</strong> to verify. <blockquote><p>Consider switching to a different source for the series.</p></blockquote></li></ul><h3 id="http-error-429-too-many-requests" tabindex="-1"><code>HTTP Error: 429</code> - Too Many Requests <a class="header-anchor" href="#http-error-429-too-many-requests" aria-label="Permalink to &quot;`HTTP Error: 429` - Too Many Requests&quot;">​</a></h3><p>This error suggests the source temporarily banned your IP due to fast downloads/reads.</p><h3 id="http-error-5xx" tabindex="-1"><code>HTTP Error: 5xx</code> <a class="header-anchor" href="#http-error-5xx" aria-label="Permalink to &quot;`HTTP Error: 5xx`&quot;">​</a></h3><p>Errors like <code>500</code>, <code>502</code>, etc., indicate server-side issues on the source&#39;s end.</p><p><a href="/manuals/guides/troubleshooting/#accessing-websites-via-webview/">Check the source in WebView</a> to confirm if it&#39;s down.</p><h3 id="http-error-1006" tabindex="-1"><code>HTTP Error: 1006</code> <a class="header-anchor" href="#http-error-1006" aria-label="Permalink to &quot;`HTTP Error: 1006`&quot;">​</a></h3><p>This error means a temporary IP ban by the source.</p><h3 id="http-error-1020" tabindex="-1"><code>HTTP Error: 1020</code> <a class="header-anchor" href="#http-error-1020" aria-label="Permalink to &quot;`HTTP Error: 1020`&quot;">​</a></h3><p>This error points to violating a firewall rule set by the site owner. The owner might raise Cloudflare protection or block IPs from outside their country.</p><div class="warning custom-block"><p class="custom-block-title">Внимание</p><p>For unlisted errors or if instructions don&#39;t help, refer to <a href="/manuals/guides/troubleshooting/diagnosis/">Diagnosis</a>.</p></div>',33),i=[r];function n(l,c,d,h,u,m){return t(),o("div",null,i)}const b=e(a,[["render",n]]);export{g as __pageData,b as default};