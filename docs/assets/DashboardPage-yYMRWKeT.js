import { _ as r, a as l, o as s, c as o, b as e, F as t, z as c, d, e as i } from './index-UmfenGTi.js'
const _ = {},
  u = e(
    'div',
    { class: 'mb-4 w-[calc(100%-10rem)] place-self-center border-b border-b-stone-400 py-6 text-center' },
    [e('h1', null, 'Categories')],
    -1
  ),
  p = { class: 'relative z-10 grid w-full grid-cols-2 gap-2 px-32 pb-4' },
  m = e('span', { class: 'text-4xl font-semibold leading-none' }, 'Neuro', -1),
  f = e('span', { class: 'font-medium leading-none' }, 'Short Desc', -1)
function b(h, x) {
  const n = l('router-link')
  return (
    s(),
    o(
      t,
      null,
      [
        u,
        e('div', p, [
          (s(),
          o(
            t,
            null,
            c(7, (a) =>
              d(
                n,
                {
                  to: { name: 'admin case scenarios', params: { category: 'neuro' } },
                  key: a,
                  class: 'flex h-32 flex-col justify-end rounded-2xl bg-blue-400 p-4 shadow-xl transition-all hover:bg-blue-500 hover:py-6'
                },
                { default: i(() => [m, f]), _: 2 },
                1024
              )
            ),
            64
          ))
        ])
      ],
      64
    )
  )
}
const v = r(_, [['render', b]])
export { v as default }
