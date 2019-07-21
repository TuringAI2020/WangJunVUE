import API from './API'

const CategoryAPI = {
  /// 获取整棵树
  GetWholeTree (rootID) {
    let param = {
      'TargetClass': 'YunRelation',
      'Method': 'GetWholeTree',
      'Param': {},
      'InputParamArray': ['EF9B7275-25A9-4FE1-91D4-F5021163B805']
    }
    return API.POST(param)
  },
  /// 新增目录
  CreateChildNode (rootID, parentID, name) {
    let param = {
      'TargetClass': 'YunRelation',
      'Method': 'CreateChildNode',
      'Param': {},
      'InputParamArray': [rootID, parentID, name]
    }
    return API.POST(param)
  },
  /// 新增目录
  RenameNode (nodeID, newName) {
    let param = {
      'TargetClass': 'YunRelation',
      'Method': 'RenameNode',
      'Param': {},
      'InputParamArray': [nodeID, newName]
    }
    return API.POST(param)
  }
}
export default CategoryAPI
