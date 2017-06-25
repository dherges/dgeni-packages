import { Symbol } from 'typescript';
import { getDeclarationTypeText } from '../services/TsParser/getDeclarationTypeText';
import { ExportDoc } from './ExportDoc';
import { ModuleDoc } from './ModuleDoc';

export class ConstExportDoc extends ExportDoc {
  docType: 'const';
  type = getDeclarationTypeText(this.declaration);

  constructor(moduleDoc: ModuleDoc, symbol: Symbol, basePath: string) {
    super(moduleDoc, symbol, symbol.valueDeclaration!, basePath);
  }
}
