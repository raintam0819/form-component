export default {
  functional: true,
  props: {
    row: Object,
    column: Object,
    index: Number,
    data: Object,
    render: Function
  },
  render: (h, ctx) => {
    const params = {
      row: ctx.props.row,
      column: ctx.props.column,
      index: ctx.props.index,
      data: ctx.props.data
    }

    return ctx.props.render(h, params)
  }
}